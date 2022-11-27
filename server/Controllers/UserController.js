import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

class UserController {
  getAllUsers = async (req, res) => {
    try {
      let users = await UserModel.find()
      users = users.map((user) => {
        const { password, ...otherDetails } = user._doc
        return otherDetails
      })
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  };

  getUser = async (req, res) => {
    const id = req.params.id;

    try {
      const user = await UserModel.findById(id);

      if (user) {
        const { password, ...otherDetails } = user._doc;

        res.status(200).json(otherDetails);
      } else {
        res.status(404).json("No such user exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateUser = async (req, res) => {
    const id = req.params.id;
    const { _id, currentUserAdminStatus, password } = req.body;

    if (id === _id) {
      try {
        if (password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }

        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("Access Denied! you can only update your own profile");
    }
  };

  deleteUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus } = req.body;

    if (currentUserId === id || currentUserAdminStatus) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("Access Denied! you can only delete your own profile");
    }
  };

  addUser = async (req, res) => {
    const id = req.params.id;

    const { _id } = req.body;

    if (_id === id) {
      res.status(403).json("Action forbidden");
    } else {
      try {
        const addedUser = await UserModel.findById(id);
        const adderUser = await UserModel.findById(_id);

        if (!addedUser.friends.includes(_id)) {
          await addedUser.updateOne({ $push: { friends: _id } });
          await adderUser.updateOne({ $push: { friends: id } });
          res.status(200).json("User added!");
        } else {
          res.status(403).json("User is Already added by you");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  };

  removeUser = async (req, res) => {
    const id = req.params.id;

    const { _id } = req.body;

    if (_id === id) {
      res.status(403).json("Action forbidden");
    } else {
      try {
        const addedUser = await UserModel.findById(id);
        const adderUser = await UserModel.findById(_id);

        if (addedUser.friends.includes(_id)) {
          await addedUser.updateOne({ $pull: { friends: _id } });
          await adderUser.updateOne({ $pull: { friends: id } });
          res.status(200).json("User removed!");
        } else {
          res.status(403).json("User is not added by you");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  };
}

export default UserController;
