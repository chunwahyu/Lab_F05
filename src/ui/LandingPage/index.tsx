import TopNavBar from "../component/TopNavBar.tsx";
import FilterForm from "./component/FilterForm.tsx";
import {Container} from "@mui/material";
import ResultTable from "./component/ResultTable.tsx";

export default function LandingPage() {
  return (
      <>
        <TopNavBar />
        <Container>
          <FilterForm />
          <ResultTable />
        </Container>
      </>
  )
}