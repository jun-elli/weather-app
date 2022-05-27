import logo from "../icons/weather-icon.png";
import "../App.css";

function SideNav({ isToday, setIsToday }) {
  const handleClick = (boolean) => {
    setIsToday(boolean);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <img src={logo} alt="Weather logo" className="img-fluid img-logo m-2" />
        <h1 className="text-secondary ms-4">My weather</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <button
                type="button"
                class={`btn ${isToday ? "btn-secondary" : "btn-primary"}`}
                onClick={() => handleClick(true)}
              >
                Today's weather
              </button>
            </li>
            <li class="nav-item">
              <button
                type="button"
                class={`btn ${!isToday ? "btn-secondary" : "btn-primary"}`}
                onClick={() => handleClick(false)}
              >
                Next 5 days
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
