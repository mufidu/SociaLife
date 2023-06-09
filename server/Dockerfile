# 1. Install node.js
FROM node:18-alpine3.16

# 2. Prepare the project folder
WORKDIR /server

# 3. Initialize project using npm init. This will create package.json
COPY package.json package.json

# 4. Install library based on package.json
RUN npm install

COPY . .

ENV PORT=3000
EXPOSE 3000

# 7. Run the applciation using command node index.js
CMD ["node", "index.js"]