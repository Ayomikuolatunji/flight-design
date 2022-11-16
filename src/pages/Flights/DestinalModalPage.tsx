import { Box } from "@mui/material";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../redux/hooks";
import { setChooseLocation } from "../../redux/features/bookFlightSlice";

export default function DestinalModalPage() {
  const dispatch = useAppDispatch();

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50 bg-white overflow-hidden">
      <Box className="flex w-full justify-between items-center p-5 border-b-2">
        <div className="flex items-center">
          <ArrowBackIcon
            onClick={() => {
              dispatch(setChooseLocation());
            }}
          />
          <span className="text ml-2">Nanaimo, Britis Columbia</span>
        </div>
        <div className="plys">
          <AddIcon />
        </div>
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <EditLocationIcon className="mr-4" />
            <Typography>Nanaimo, Britis Columbia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <EditLocationIcon className="mr-4" />
            <Typography>Nanaimo, Britis Columbia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
