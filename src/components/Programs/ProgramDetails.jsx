import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


export default function ProgramDeatails({ data }) {

    let { image, desc1, desc2, subject } = data;

    return (
        <>
            <Card sx={{ minWidth: "350px", borderRadius: "20px" }} >
                <CardMedia
                    sx={{ height: 200 }}
                    image={image}
                    title="green iguana"
                />
                <CardContent className='p-4'>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }} component="div">
                        {desc1}
                    </Typography>
                    <Typography variant="p" sx={{ color: 'text.secondary', fontWeight: "600" }}>{desc2}</Typography>
                </CardContent>
                <CardActions className='p-3'>
                    {subject.map((el, idx) => {
                        return <a href="#" key={idx}><Chip label={el} /></a>;
                    })}
                </CardActions>
            </Card>
        </>
    )
}