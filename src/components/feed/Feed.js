import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import Product from "../cards/Product";
import FilterMenu from "./FilterMenu";
import '../../styles/feed/feed.css'

const Feed = props => {
  const DATA = [
    [1 ,22 ,33 ,45],
    [11, [31 ,52]],
    [111, 42, 53 ,64],
    [100, [41 ,422]],
    [[1432 ,22342], 132]
  ]
  return (
    <Grid
      direction="row"
      container
      gap={10}
      justifyContent="center"
    >
      <Grid item lg={8} md={11} sm={12} xs={12}>
        <FilterMenu/>
        {DATA.map((a, c) => (
          <Masonry
            columns={{
              md: a.length,
              sm: 2}}
            spacing={1.5}
          >
            {a.map((x, k) => {
              if(Array.isArray(x)) {
                return(
                  <div style={{
                    display:'flex',
                    gap:13}}>
                      {x.map((z, i) => (
                        <Product
                          layoutId={z}
                          key={z}
                          onClick={(e) => {
                            props.element(z)
                          }}
                        />
                      ))}
                  </div>
                )
              }
              var CARD_TYPE = a.filter(
                item => typeof(item) === typeof({})).length
                CARD_TYPE = CARD_TYPE >= 1 ? 'large':'small'
                
              return (
                <Product
                  layoutId={x}
                  key={x}
                  onClick={(e) => {
                    props.element(x)
                  }}
                  mode={CARD_TYPE}/>
                )
            })}
          </Masonry>
        ))}
      </Grid>
    </Grid>
  );
}

export default Feed