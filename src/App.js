import FormikForm from "./components/FormikForm";
import ReactHookForm from "./components/ReactHookForm";
import "./styles/css/app.css";

function App() {
  return (
    <main>
      <h1>React Form Validations</h1>
      <section>
        <ReactHookForm />
        <FormikForm />
      </section>
    </main>
  );
}

export default App;
