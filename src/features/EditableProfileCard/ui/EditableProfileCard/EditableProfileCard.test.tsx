import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditableProfileCard } from "./EditableProfileCard";
import { renderComponent } from "@/shared/config/tests/renderComponent/renderComponent";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { baseInstance } from "@/shared/api/baseInstance";

const profile: Profile = {
  id: "1",
  first: "admin",
  username: "admin",
  lastname: "admin",
  age: 20,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: "Kiev",
};

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true,
    },
    user: {
      authData: {
        id: "1",
        username: "admin",
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("toogle readonly", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument();
    expect(screen.getByTestId("EditableProfileCardHeader.SaveButton")).toBeInTheDocument();
  });

  test("reset form values on cancel", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
  });

  test("show validation error if lastname is empty", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));

    expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument();
  });

  test("send PUT request when saving valid form data", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);
    const mockPutReq = jest.spyOn(baseInstance, "put");

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "123");

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
