import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/icons/DeleteForever";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    icon: {
        margin: theme.spacing(2)
    },
    iconHover: {
        margin: theme.spacing(2),
        "&:hover": {
            color: blue[800]
        }
    }
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Gasto = props => {
    const classes = useStyles();

    const { gasto, setIdGasto, setEliminado } = props;

    const eliminaGasto = id => {
        // console.log(id);
        setEliminado(true);
        setIdGasto(id);
    };

    return (
        <li className="gasto">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">$ {gasto.cantidadGasto}</span>
                <HomeIcon
                    className={classes.iconHover}
                    color="error"
                    style={{ fontSize: 35 }}
                    onClick={() => eliminaGasto(gasto.id)}
                />
            </p>
        </li>
    );
};

export default Gasto;
