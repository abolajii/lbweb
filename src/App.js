import AuthStack from "./routes/auth";
import NoAuthStack from "./routes/noauth";
import { useAuth } from "./context/user.context";

const Container = () => {
  const { user } = useAuth();
  return user !== null ? <AuthStack /> : <NoAuthStack />;
};

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default App;
