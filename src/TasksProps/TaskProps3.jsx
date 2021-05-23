import React from "react";

const TaskProps3 = () => {
  return (
    <>
      <Content />
    </>
  );
};

const Content = () => {
  return (
    <>
      <Alert text="Текст для теста!" primColor="#CCE5FF" secColor="#004085" />
      <Button
        type="button"
        text="Текст для кнопки, или ссылки?"
        style={{
          display: "flex",
          maxWidth: "30%",
          color: "black",
          backgroundColor: "#E0A800",
          fontWeight: 600,
          borderRadius: "10px",
          border: "none",
          padding: "10px 12px",
        }}
      />
      <Card imgUrl="https://goodlogo.com/images/logos/bmw_logo_2651.gif">
        <h3>Картинка с html кодом (jsx ваще-то)</h3>
        <p>JSX</p>
      </Card>
      <Nav
        links={[
          { title: "Новости", link: "/news" },
          { title: "Не новости", link: "/notNews" },
          { title: "Но", link: "/notNews" },
          { title: "События", link: "/notNews" },
        ]}
      />
    </>
  );
};

const Alert = ({ text, primColor, secColor }) => {
  return (
    <div
      className="alert"
      style={{
        color: secColor,
        backgroundColor: primColor,
        border: `1px solid ${secColor}`,
      }}
    >
      {text}
    </div>
  );
};

const Button = ({ style, text, type, href = "/" }) => {
  if (type === "link") {
    return (
      <a style={style} href={href}>
        {text}
      </a>
    );
  }
  return (
    <button style={style} className="btn" type={type}>
      {text}
    </button>
  );
};

const Card = ({ imgUrl, children }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="bruh" />
      <div>
        <p class="card-text">{children}</p>
      </div>
    </div>
  );
};
const Nav = ({ links }) => {
  return (
    <ol className="nav-2">
      {links.map((linkItem) => (
        <li>
          <a href={linkItem.link}>{linkItem.title}</a>
        </li>
      ))}
    </ol>
  );
};

export default TaskProps3;
