import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./presentation.css";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Math from "reveal.js/plugin/math/math";

import { DisclaimerSlide } from "./slides/02-disclaimer";
import { PlanSlide } from "./slides/03-plan";
import { MachineLearningSlide } from "./slides/04-machine-learning";
import { SupervisedLearningSlide } from "./slides/05-supervised-learning";
import { NeuronSlide } from "./slides/06-neuron";

export function Presentation() {
  useEffect(() => {
    const deck = new Reveal({ plugins: [Highlight, Math] });
    deck.initialize({ width: 1280, height: 720 });
  });

  return createPortal(
    <div className="reveal">
      <div className="slides">
        <section>
          <h1>Neural Networks</h1>
          <p>Intro with tensorflow.js examples</p>
        </section>

        <DisclaimerSlide />
        <PlanSlide />
        <MachineLearningSlide />
        <SupervisedLearningSlide />
        <NeuronSlide />

        <section>
          <h2>Questions?</h2>
        </section>
        <section>
          <h2>Thanks 👋</h2>
        </section>
      </div>
    </div>,
    document.body
  );
}
