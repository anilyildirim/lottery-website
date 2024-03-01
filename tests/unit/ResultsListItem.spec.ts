import { render, screen } from "@testing-library/vue";
import ResultsListItem from "@/components/ResultsListItem.vue";

describe("ResultsListItem.vue", () => {
  it("renders draw details and titles correctly", () => {
    const draw = {
      date: "2022-03-01",
      jackpot: 1000000,
      numbers: [1, 2, 3, 4, 5],
    };

    render(ResultsListItem, {
      props: { draw },
    });

    expect(
      screen.getByTestId("results-list-item-date-title").textContent
    ).toContain("Draw Date:");
    expect(screen.getByText(draw.date)).toBeTruthy();
    expect(
      screen.getByTestId("results-list-item-type-title").textContent
    ).toContain("Jackpot:");
    expect(screen.getByText(`${draw.jackpot.toString()} €`)).toBeTruthy();
    expect(
      screen.getByTestId("results-list-item-numbers-title").textContent
    ).toContain("Numbers:");
    expect(screen.getByText(draw.numbers.join(", "))).toBeTruthy();
  });
});
