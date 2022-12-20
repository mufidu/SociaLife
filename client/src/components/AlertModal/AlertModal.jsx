import { Modal, useMantineTheme } from "@mantine/core";

function AlertModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <h3>Anda telah berada di app selama 15 menit!</h3>
      <button classname="button infoButton" onClick={setModalOpened(false)}>
        OK
      </button>
    </Modal>
  );
}

export default AlertModal;
