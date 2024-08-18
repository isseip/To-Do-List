import NewTask from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import Display from "./components/tasks";

export default function Home() {
  return (<>
  <Header/>
  <Display/>
  <NewTask/>
  <Footer/>
  </>
  );
}
