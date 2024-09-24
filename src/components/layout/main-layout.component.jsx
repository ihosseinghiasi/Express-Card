import Footer from "./footer/footer.component";
import Header from "./header/navbar.component";

const MainLayoutComponent = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayoutComponent;
