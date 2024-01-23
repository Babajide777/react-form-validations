import AntDesignForm from "./components/AntDesignForm";
import FormikForm from "./components/FormikForm";
import ReactFinalForm from "./components/ReactFinalForm";
import ReactHookForm from "./components/ReactHookForm";
import TanStackForm from "./components/TanStackForm";
import "./styles/css/app.css";

function App() {
  return (
    <main>
      <h1>React Form Validations</h1>
      <section>
        <ReactHookForm />
        <FormikForm />
        <AntDesignForm />
        <TanStackForm />
        <ReactFinalForm />
      </section>
    </main>
  );
}

export default App;
