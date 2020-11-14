import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Cards/cards.css";

const useStyles = makeStyles({
  root: {
    marginLeft: 40,
    maxWidth: 260,
    background: "linear-gradient(to right, #e4b639d2,#ffa)"
  },
  pos: {
    marginBottom: 15
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <>
      <div className="main">
        <h1 className="tra">OUR TRAINERS</h1>
        <div className="card1">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer1
                {/* <img src="avataaars.png" alt="img" /> */}
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card2">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer2
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer2
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <h1 className="nut">OUR NUTRITIONISTS</h1>
        <div className="card4">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Nutritionist1
              </Typography>
              <Typography variant="body2" component="p">
                Curabitur congue ultricies elit, eu convallis magna sagittis in.
                Nam vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card6">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Nutritionist2
              </Typography>
              <Typography variant="body2" component="p">
                Nullam egestas ligula ipsum, ut vulputate mauris luctus sed.
                Curabitur congue convallis magna sagittis in. Nam vehicula felis
                non erat ornare faucibus a vel lectus.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
