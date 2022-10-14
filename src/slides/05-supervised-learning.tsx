import { Chip } from "@mui/material";

export function SupervisedLearningSlide() {
  const outOfScopeChip = (
    <Chip variant="outlined" color="warning" label="Out of scope" />
  );

  return (
    <section>
      <h2>Supervised Learning</h2>

      <div className="column-layout" style={{ textAlign: "left" }}>
        <div>
          <p>Process</p>
          <ol style={{ fontSize: "0.8em" }}>
            <li>Obtain some labeled data</li>
            <li>Split the data into training and test sets</li>
            <li>Design a model</li>
            <li>Train the model on the training data set</li>
            <li>Evaluate the model on the test set</li>
          </ol>
        </div>
        <div>
          <p>Algorithms</p>
          <ul style={{ fontSize: "0.8em" }}>
            <li>Naive Bayes {outOfScopeChip}</li>
            <li>Decision trees {outOfScopeChip}</li>
            <li>Nearest neighbors {outOfScopeChip}</li>
            <li>Linear regression {outOfScopeChip}</li>
            <li>Logistic regression {outOfScopeChip}</li>
            <li>Support-vector machines {outOfScopeChip}</li>
            <li>Neural networks 🎉</li>
          </ul>
        </div>
      </div>

      <p>
        If you'd like a talk about all the {outOfScopeChip} algorithms let me
        know.
      </p>
    </section>
  );
}
