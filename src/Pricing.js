import React from "react";
import {
  Pricing,
  PricingCard,
  PricingTitle,
  Price,
  PricingFeatures,
} from "./styles/Pricing.js";
import { Button } from "./styles/Button";
export default function PricingPage() {
  return (
    <>
      <h1>Pricing</h1>
      <Pricing>
        <PricingCard>
          <PricingTitle>Free</PricingTitle>
          <p>
            <Price>$0</Price>/month
          </p>{" "}
          <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </PricingFeatures>
          <Button>Get Started</Button>
        </PricingCard>
        <PricingCard>
          <PricingTitle>Standard</PricingTitle>
          <p>
            <Price>$10</Price>/month
          </p>{" "}
          <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </PricingFeatures>
          <Button primary>Get Started</Button>
        </PricingCard>
        <PricingCard>
          <PricingTitle>Enterprise</PricingTitle>
          <p>
            <Price>$100</Price>/month
          </p>
          <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </PricingFeatures>
          <Button>Get Started</Button>
        </PricingCard>
      </Pricing>
    </>
  );
}
