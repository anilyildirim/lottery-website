import { render, screen } from "@testing-library/vue";
import ResultsPage from "@/views/ResultsPage.vue";
import { apolloClient } from "@/services/apollo-client";

jest.mock("@/services/apollo-client", () => ({
  apolloClient: {
    query: jest.fn(),
  },
}));

describe("ResultsPage.vue", () => {
  beforeEach(() => {
    // Reset mock function before each test
    jest.resetAllMocks();
  });

  it("renders ResultsList with mock data", async () => {
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

    render(ResultsPage);

    const resultList = screen.findByTestId("result-list");
    expect(resultList).toBeTruthy();
  });

  it("renders loading text first when there is valid draw data", async () => {
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

    render(ResultsPage);

    const loadingComponent = screen.getByTestId("loading");
    expect(loadingComponent).toBeTruthy();

    const resultList = screen.findByTestId("result-list");
    setTimeout(() => {
      expect(resultList).toBeTruthy();
      expect(loadingComponent).toBeNull();
    }, 0);
  });

  it("renders warning text if draws array is empty", async () => {
    const mockData = {
      data: {
        draw: {
          draws: [],
        },
      },
    };

    (apolloClient.query as jest.Mock).mockResolvedValue(mockData);

    render(ResultsPage);

    const warningComponent = screen.findByTestId("warning");
    expect(warningComponent).toBeTruthy();
  });
});
