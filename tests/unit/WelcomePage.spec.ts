import { render, screen } from "@testing-library/vue";
import WelcomePage from "@/views/WelcomePage.vue";

describe("WelcomePage.vue", () => {
  it("renders WelcomePage", async () => {
    render(WelcomePage);

    const logo = screen.getByAltText("company logo");
    expect(logo).toBeTruthy();

    const heading = screen.getByTestId("welcome-page-title");
    expect(heading.textContent).toContain("Welcome to our homepage!");

    const paragraph = screen.getByTestId("welcome-page-paragraph");
    expect(paragraph.textContent).toContain(
      "Checkout the winners by clicking the button below:"
    );

    const button = screen.getByRole("button", { name: "Lottery Page" });
    expect(button).toBeTruthy();
  });
});
