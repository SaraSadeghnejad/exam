import { Breadcrumbs, Link, Typography } from "@mui/material"
import React from "react"

const BreadCrumbs = ()=>{
return(
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
آزمون
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
  آزمون جاری
  </Link>

</Breadcrumbs>
)
}
export default BreadCrumbs