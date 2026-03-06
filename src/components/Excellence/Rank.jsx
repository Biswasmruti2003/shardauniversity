export default function Rank({ data }) {
    return (
        <>
            {data.map((el, idx) => {
                return <div className='col-lg-3 text-center' key={idx}>
                    <p className='m-0 fw-bold text-secondary'> {el.icon}{el.title}</p>
                    <h1>{el.rank}</h1>
                </div>
            })}
        </>
    )
}