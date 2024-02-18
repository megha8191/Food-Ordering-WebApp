const Shimmer = () => {
    let dummynumber = new Array(9).fill('0');
    let i = 0;
    return (
        <div className="innerMain shimmer-styles" data-testid="shimmer" >
            <div className="searchblock">
                <input readOnly
                    className="form-control"
                />
                <button type="button" readOnly disabled className="btn-theme">Search</button>
            </div>
            <div className="restaurant-list" data-testid="shimmerCards">
                {dummynumber.map((restaurant) => {
                    return <div className="shimmer-box" key={"restaurant" + i++}> <p>....</p></div>
                })}
            </div>
        </div>
    )
}

export default Shimmer