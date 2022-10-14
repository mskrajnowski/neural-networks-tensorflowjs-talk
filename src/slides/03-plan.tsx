import { Chip } from "@mui/material";

export function PlanSlide() {
  const demoChip = <Chip variant="outlined" color="info" label="demo" />;

  return (
    <section>
      <h2>Plan</h2>
      <div className="">
        <ul>
          <li>Machine learning basics</li>
          <li>Neural network basics {demoChip}</li>
          <li>Math, how it works</li>
          <li>Common topologies</li>
          <li>Convolution {demoChip}</li>
          <li>Transfer learning {demoChip}</li>
          <li>Discussion</li>
        </ul>
      </div>
    </section>
  );
}
