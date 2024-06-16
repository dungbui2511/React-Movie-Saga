import React from "react";
import {Card,CardMedia,Grid,CardContent,Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MovieList = ()=>{
    const {moviesList} = useSelector((state)=>(state.movie));
    return (
        <div>
        <Grid container justifyContent={"center"} spacing={4}>
        {moviesList?.Search?.map((item,index)=>(
            <Grid key={index} item>
            <Card sx={{maxWidth:"350"}}>
            <Link to={`/movie/${item.imdbID}`}>
            <CardMedia component={"img"} height={"350"} image={item.Poster} alt={item.Title}/>
            <CardContent>
            <Typography variant="body2" color="text.primary">{item.Title}</Typography>
            <Typography variant="body2" color="text.primary">{item.Year}</Typography>
            </CardContent>
          </Link>
            </Card>
            </Grid>
        ))}
        </Grid>
        </div>
    )
}
export default MovieList;