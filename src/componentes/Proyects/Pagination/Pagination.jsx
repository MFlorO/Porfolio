import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {IconButton , Stack, Typography} from '@mui/material/';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const Pagination = ({copia, currentPage , setCurrentPage, itemsPerPage}) => {

	const total = copia.length / itemsPerPage

	const page = currentPage === 0 ? currentPage + 1 : (currentPage / itemsPerPage) + 1

	const previuos = () =>{
	   ( page !== 1) && setCurrentPage(currentPage - itemsPerPage)
	}

	const next = () =>{
		(total !== page) && setCurrentPage(currentPage + itemsPerPage)
	}

	console.log('total', total)
	console.log('page', page)
	console.log('currentPage', currentPage)



	return (
	<Stack direction='row' alignItems='center' justifyContent='space-around'  sx={{ width:{ xs:"40%", xl: "20%" }}}>
		<IconButton  onClick={previuos}><ArrowBackIosNewRoundedIcon  color="primary.main" /></IconButton >

		<Typography fontSize='15px' color="primary.main">{page}</Typography>

		<IconButton  onClick={next} ><ArrowForwardIosRoundedIcon color="primary.main" /></IconButton >
	</Stack>
	);
};

export default Pagination;
