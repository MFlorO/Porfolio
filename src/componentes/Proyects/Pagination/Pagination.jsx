import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {IconButton , Stack, Typography} from '@mui/material/';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const Pagination = ({copia, currentPage , setCurrentPage, itemsPerPage}) => {

	const total = copia.length / itemsPerPage
	
	const page = currentPage === 0 ? currentPage + 1 : (currentPage / itemsPerPage) + 1

	const disabledNext = total !== page  //Creo una variable para despues utilizarla en el estilo del boton disabled
	const disabledPreviuos = page !== 1

	const previuos = () => disabledPreviuos && setCurrentPage(currentPage - itemsPerPage)
	const next = () =>	disabledNext && setCurrentPage(currentPage + itemsPerPage)
	
	return (
	<Stack direction='row' alignItems='center' justifyContent='space-around'  sx={{ width:{ xs:"40%", xl: "20%" }}}>
		<IconButton  onClick={previuos} disabled={!disabledPreviuos}><ArrowBackIosNewRoundedIcon  color={!disabledPreviuos? "grey" : "primary.main"} /></IconButton >

		<Typography fontSize='15px' color="primary.main">{page}</Typography>

		<IconButton  onClick={next} disabled={Math.ceil(total) === page}><ArrowForwardIosRoundedIcon color={!disabledNext? "grey" : "primary.main"} /></IconButton >
	</Stack>
	);
};

export default Pagination;
