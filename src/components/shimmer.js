const Shimmer = () => {
    let dummynumber = new Array(9).fill('0');
    console.log(dummynumber)
    return (
        <div className="innerMain shimmer-styles" style={{ marginTop: "20px" }}>
            <div className="searchblock">
                <input readOnly
                    className="form-control"
                />
                <button type="button" readOnly disabled className="btn-theme">Search</button>
            </div>
            <div className="restaurant-list">
                {dummynumber.map((restaurant) => {
                    let i = 0;
                    return <div className="shimmer-box" key={i++}> <p>....</p></div>
                })}
            </div>
        </div>
    )
}

export default Shimmer