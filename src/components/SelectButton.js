import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    selectButton: {
      cursor: 'pointer',
      border: '1px solid gold',
      borderRadius: 5,
      padding: 20,
      paddingTop: 10,
      paddingBottom: 10,
      fontFamily: "'Libre Bodoni', serif",
      backgroundColor: selected ? 'gold' : '',
      color: selected ? 'black' : '',
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: 'gold',
        color: 'black'
      },
      width: '21%',
      textAlign: 'center',
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 11
      }
    }
  }))

  const classes = useStyles()

  return (
    <span onClick={onClick} className={classes.selectButton}>{children}</span>
  )
}

export default SelectButton