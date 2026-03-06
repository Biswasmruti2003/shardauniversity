export default function Rankcard({ rankData }) {
    return (
        <>
            {rankData.map((el, idx) => {
                return <div className="text-center py-5 px-4 grade " key={idx}>
                    {el.icon}
                    <h3 className="my-4 fw-bold ">{el.title}</h3>
                    <span className='bg-warning fw-bold  px-2 py-1 rounded-3'>{el.rank}</span>
                    <hr />
                    <p>{el.desc}</p>
                </div>
            })}
        </>
    )
}