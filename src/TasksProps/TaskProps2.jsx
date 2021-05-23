import React from "react";

const TaskProps2 = () => {
  return (
    <>
      <Header
        title="BMW"
        imageUrl="https://goodlogo.com/images/logos/bmw_logo_2651.gif"
      />
      <Nav
        navList={[
          { title: "Новости", link: "/news" },
          { title: "Неновости", link: "/notNews" },
        ]}
      />
      <Footer />
    </>
  );
};

// Этот компонент принимает название сайта + ссылку на картинку
const Header = ({ title, imageUrl }) => {
  return (
    <header class="header">
      <img src={imageUrl} alt="" />
      <p>{title}</p>
    </header>
  );
};

const Nav = ({ navList }) => {
  return (
    <nav className="nav">
      {navList.map((navItem) => (
        <a href={navItem.link}>{navItem.title}</a>
      ))}
    </nav>
  );
};

const Footer = () => {
    const date = new Date();

  return (
    <footer class="footer">
      <small>@copyright все права защищены {date.getFullYear()} год</small>
    </footer>
  );
};

export default TaskProps2;
