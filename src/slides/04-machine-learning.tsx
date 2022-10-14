import { Chip } from "@mui/material";

export function MachineLearningSlide() {
  const outOfScopeChip = (
    <Chip variant="outlined" color="warning" label="Out of scope" />
  );

  return (
    <section>
      <h2>Machine Learning</h2>

      <div className="">
        <q cite="https://en.wikipedia.org/wiki/Machine_learning">
          Machine learning algorithms build a model based on sample data, known
          as training data, in order to make predictions or decisions without
          being explicitly programmed to do so.
        </q>

        <div>
          <cite style={{ fontSize: "0.5em" }}>
            <a
              href="https://en.wikipedia.org/wiki/Machine_learning"
              target="_blank"
            >
              https://en.wikipedia.org/wiki/Machine_learning
            </a>
          </cite>
        </div>

        <p>Approaches</p>
        <ul style={{ fontSize: "0.8em" }}>
          <li>Supervised - we have labeled data</li>
          <li>Unsupervised - we have unlabeled data {outOfScopeChip} </li>
          <li>
            Reinforcement learning - we reward/punish certain actions{" "}
            {outOfScopeChip}
          </li>
        </ul>
      </div>
    </section>
  );
}
