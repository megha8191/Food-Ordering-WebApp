const Shimmer = () => {
    let dummynumber = new Array(9).fill('0');
    let i = 78;
    console.log(dummynumber)
    return (
        <div className="innerMain shimmer-styles" >
            <div className="searchblock">
                <input readOnly
                    className="form-control"
                />
                <button type="button" readOnly disabled className="btn-theme">Search</button>
            </div>
            <div className="restaurant-list">
                {dummynumber.map((restaurant) => {
                    return <div className="shimmer-box" key={i++}> <p>....</p></div>
                })}
            </div>
        </div>
    )
}

export default Shimmer