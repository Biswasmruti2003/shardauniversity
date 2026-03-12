export default function Rankcard({ rankData }) {
    return (
        <>
            {rankData.map((el, idx) => {
                return <div className="text-center py-5 px-4 grade" key={idx}>
                    <div style={{position:"relative"}} >
                        {el.icon}
                        <i className="bi bi-check-circle px-1" style={{color:`${el.color}`}}></i>
                    </div>
                    <h3 className="mt-5 mb-3 fw-bold ">{el.title}</h3>
                    <span className='bg-warning fw-bold  px-2 py-1 rounded-3'>{el.rank}</span>
                    <hr />
                    <p>{el.desc}</p>
                </div>
            })}
        </>
    )
}