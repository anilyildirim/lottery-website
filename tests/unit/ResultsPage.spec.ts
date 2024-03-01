import { render, screen, waitFor } from "@testing-library/vue";
import ResultsPage from "@/views/ResultsPage.vue";
import { apolloClient } from "@/services/apollo-client";

jest.mock("@/services/apollo-client", () => ({
  apolloClient: {
    query: jest.fn(),
  },
}));

const mockData = {
  data: {
    draw: {
      draws: [
        { date: "2022-03-01", jackpot: 1000000, numbers: [1, 2, 3, 4, 5] },
      ],
    },
  },
};

(apolloClient.query as jest.Mock).mockResolvedValue(mockData);

describe("ResultsPage.vue", () => {
  it("renders ResultsPage with mock data", async () => {
    render(ResultsPage);

    await waitFor(() => {
      expect(screen.getByTestId("results-page-title").textContent).toContain(
        "Winning Lotteries"
      );
    });
  });
});
