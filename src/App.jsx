import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#000000" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App;
