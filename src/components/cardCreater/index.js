import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCreaterApi } from "../../feature/createrApi/creater.action";

const CreterCard = () => {
  const classes = useStyles();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreaterApi());
  }, []);
  const {
    createrApiSlice: { createrApi },
  } = useSelector((state) => state);

  const detailsHandle = (name) => {
    Navigate(`/${name}`);
  };
  return (
    <Box className={classes.gridContainer}>
      {createrApi.Creators &&
        createrApi.Creators.map((item) => {
          return (
            <Box
              className={classes.main}
              onClick={(name) => {
                detailsHandle(item.username);
              }}
            >
              <Box>
                <Box className={classes.profilebox}>
                  <img
                    className={classes.imgProfile}
                    src={item.creator_img}
                    alt="imagepic"
                  />
                </Box>
              </Box>
              <Box>
                <img
                  className={classes.imgtop}
                  src={item.creator_cover}
                  alt="ss"
                />
              </Box>
              <Box className={classes.sndSection}>
                <Box className={classes.innerSection}>
                  <Box className={classes.namebox}>
                    <Typography variant="h4">{item.fullName}</Typography>
                  </Box>
                  <Box className={classes.usernamebox}>
                    <p>@</p>
                    <Typography className={classes.username} variant="body1">
                      {item.username}
                    </Typography>
                  </Box>
                  <Box className={classes.descriptionbox}>
                    <Typography variant="body1">{item.bio}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};
export default CreterCard;
const useStyles = makeStyles((theme) => ({
  main: {
    borderRadius: 5,
    width: 310,
    height: 470,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: 15,
    },
  },
  sndSection: {
    clipPath:
      "polygon(20% 14%, 100% 0, 100% 100%, 0 100%, 0 83%, 0 34%, 0 29%, 4% 24%, 8% 20%, 14% 16%)",
    position: "relative",
    bottom: 5,
    paddingLeft: 15,
    height: 270,
    background: "#B5B5B5",
  },
  imgtop: {
    width: 310,
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  innerSection: {
    paddingTop: 90,
  },
  profilebox: {
    position: "relative",
    zIndex: 1000,
    top: 250,
    left: 13,
    width: 90,
    height: 90,
    borderRadius: 50,
    border: "2px solid  white",
  },
  imgProfile: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  namebox: {
    textAlign: "start",
  },
  usernamebox: {
    display: "flex",
    textAlign: "start",
  },

  username: {
    paddingTop: 13,
  },
  descriptionbox: {
    textAlign: "start",
  },

  gridContainer: {
    padding: "40px 60px 40px 60px",

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      gridTemplateColumns: "1fr",
    },
  },
}));
