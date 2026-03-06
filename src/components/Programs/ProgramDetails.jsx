import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function ProgramDeatails({ data }) {

    return (
        <>
            {data.map((obj, idx) => {
                return <Card sx={{ width : "600px ", borderRadius: "20px" }} key={idx} className='p-0 d-flex flex-column justify-content-between'>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={obj.image}
                        title="green iguana"
                    />
                    <CardContent className='p-4 pt-5'>
                        <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }} component="div">
                            {obj.title}
                        </Typography>
                        <Typography variant="p" sx={{ color: 'text.secondary', fontWeight: "600" }}>{obj.subtitle}</Typography>
                        <CardActions className='px-0 py-4 d-flex flex-wrap gap-2'>
                            {obj.subjects.map((el, idx) => {
                                return <a href="#" key={idx}><Chip label={el} /></a>;
                            })}
                        </CardActions>
                        <button className='btn fw-semibold border rounded-3 d-flex justify-content-between ' style={{ width: "100%" }}>View Details <ArrowRightAltIcon /> </button>
                    </CardContent>

                </Card>
            })}
        </>
    )
}