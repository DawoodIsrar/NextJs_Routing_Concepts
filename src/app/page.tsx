import "./index.css";
export default function Hompage() {
  return (
    <>
      <div className="menu">
        <ul>
          <a>
            <li>Home</li>
          </a>
          <a href={"/About/AboutUs"}>
            <li>About</li>
          </a>
          <a>
            <li>Services</li>
          </a>
          <a>
            <li>Contact US</li>
          </a>
        </ul>
      </div>
    </>
  );
}
