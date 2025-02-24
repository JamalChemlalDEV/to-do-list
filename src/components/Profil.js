import '../styles/profil.css'

function Profil() {
    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "short"
    };
    const formattedDate = date.toLocaleDateString("de-DE", options)

    const userName = "Chemlal Jamal";

    return (
        <div className="profil">
            <div id="date">{formattedDate}</div>
            <h1>Hallo, {userName} </h1>
            <span>Lass uns deine Ziele erreichen!</span>
        </div>
    )
}

export default Profil;