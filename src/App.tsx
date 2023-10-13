import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Container } from "./Container";
import { useAccount } from "wagmi";

const ADDRESS_TO_GATE = "0x4EDe2333AdE8533f698657E41455a2450153172D";

function App() {
  const { address } = useAccount();

  return (
    <Container>
      <ConnectButton />
    </Container>
  );
}

export default App;
