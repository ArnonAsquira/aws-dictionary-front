import app from "./app";
import { PORT } from "./utils/enviorment-varibales";

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
