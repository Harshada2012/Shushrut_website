import './Department.css'

export default function Department2() {
    const items = [
        { img: "1.png" },
        { img: "2.png" },
        { img: "3.png" },
        { img: "4.png" }
    ];

    const items2 = [
        { img: "5.png" },
        { img: "6.png" }
    ];

    return (
        <div className="departments-section">

            <div className='dept-heading'>
                <h2>Our Top Specialist</h2>
                <br />
                <h1>Our Department</h1>
            </div>

            <div className="dept-grid1">
                {items.map((item, index) => (
                    <div className="dept-card" key={index}>
                        <img src={item.img} alt="" className="dept-img" />
                    </div>
                ))}
            </div>

            <div className="dept-grid2">
                {items2.map((item2, index) => (
                    <div className="dept-card" key={index}>
                        <img src={item2.img} alt="" className="dept-img" />
                    </div>
                ))}
            </div>

            <button className="dept-btn"><b>Make an Appointment</b></button>
        </div>
    );
}