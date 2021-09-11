import React from 'react';
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
// import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'green',
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2,
  },
});

const UrlFieldCustom = ({ source }) => {
  const record = useRecordContext();
  const classes = useStyles();

  return (
    <>
      {record ? (
        <a href={record[source]} className={classes.link}>
          {record[source]}
        </a>
      ) : null}
    </>
  );
};

UrlFieldCustom.propTypes = {};

export default UrlFieldCustom;
