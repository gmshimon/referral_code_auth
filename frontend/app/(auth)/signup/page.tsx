"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import dayjs from "dayjs";
import { DateInput, DateInputProps } from "@mantine/dates";
import { gizaStencil, saolDisplay, workSans } from "../../fonts";

const fieldClassNames = {
  input: `!border-0 !border-b-3 !border-black !rounded-none text-green-300  ${workSans.className}`,
};

const dateParser: DateInputProps["dateParser"] = (input) => {
  const parsed = dayjs(
    input.trim(),
    ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"],
    true
  );
  return parsed.isValid() ? parsed.toDate() : null;
};
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const CheckGlyph = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 text-zinc-700">
    <path
      fill="currentColor"
      d="M6.2 11.3 2.6 7.7l1.1-1.1 2.5 2.5 6-6 1.1 1.1z"
    />
  </svg>
);

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    surname: "",
    nickname: "",
    dob: null as Date | null,
    password: "",
    confirmPassword: "",
    referral: "",
  });

  const handleInputChange =
    (field: Exclude<keyof typeof form, "dob">) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event?.currentTarget?.value ?? "";
      setForm((prev) => ({ ...prev, [field]: nextValue }));
    };

  const handleDateChange = (value: string | null) => {
    const parsed = value ? dateParser(value) : null;
    setForm((prev) => ({ ...prev, dob: parsed }));
  };

  const rightSectionFor = (hasValue: boolean) =>
    hasValue ? (
      <CheckGlyph />
    ) : (
      <span className="text-2xl text-zinc-500">*</span>
    );
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-50 font-sans text-zinc-900">
      <div className="relative z-10 flex min-h-screen items-start justify-center px-4 py-12 sm:items-center sm:px-8">
        <Container size={623} className="w-full">
          <div className=" border border-black/10 bg-white/80 px-6  py-20 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur sm:px-10">
            <div className="opacity-0 motion-safe:animate-[fade-up_0.7s_ease-out_forwards]">
              <Title
                size={48}
                className={`${saolDisplay.className}  text-zinc-900 text-center`}
              >
                My{" "}
                <span className={`${gizaStencil.className} font-normal `}>
                  trendies
                </span>{" "}
                Account
              </Title>
              <Text size="20px" mt={15} className="  text-zinc-600 text-center">
                Create an account to shop unique finds, chat with sellers, and
                bid smartly.
              </Text>
            </div>

            <div className="flex w-full justify-center my-[50px]">
              <div
                className="w-87.5 motion-safe:animate-[fade-up_0.7s_ease-out_forwards]"
                style={{ animationDelay: "120ms" }}
              >
                <Stack gap={22}>
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.email}
                    onChange={handleInputChange("email")}
                    placeholder="janedoe@gmail.com"
                    variant="unstyled"
                    rightSection={
                      form.email && isValidEmail(form.email) ? (
                        <CheckGlyph />
                      ) : (
                        <span className="text-2xl text-zinc-500">*</span>
                      )
                    }
                    rightSectionPointerEvents="none"
                    rightSectionWidth={32}
                    classNames={fieldClassNames}
                    autoComplete="email"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.name}
                    onChange={handleInputChange("name")}
                    placeholder="Name"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.name))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="given-name"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.surname}
                    onChange={handleInputChange("surname")}
                    placeholder="Surname"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.surname))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="family-name"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.nickname}
                    onChange={handleInputChange("nickname")}
                    placeholder="Nickname"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.nickname))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="nickname"
                  />
                  <DateInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                      
                    }}
                    dateParser={dateParser}
                    value={
                      form.dob ? dayjs(form.dob).format("MM / DD / YYYY") : null
                    }
                    onChange={handleDateChange}
                    placeholder="MM / DD / YYYY"
                    valueFormat="MM / DD / YYYY"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.dob))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="bday"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.password}
                    onChange={handleInputChange("password")}
                    placeholder="Password"
                    type="password"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.password))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="new-password"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.confirmPassword}
                    onChange={handleInputChange("confirmPassword")}
                    placeholder="Confirm Password"
                    type="password"
                    variant="unstyled"
                    rightSection={rightSectionFor(
                      Boolean(form.confirmPassword)
                    )}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                    autoComplete="new-password"
                  />
                  <TextInput
                    styles={{
                      input: {
                        fontFamily: workSans.style.fontFamily,
                        fontSize: "16px",
                        paddingBottom: "10px",
                      },
                    }}
                    value={form.referral}
                    onChange={handleInputChange("referral")}
                    placeholder="Referral code"
                    variant="unstyled"
                    rightSection={rightSectionFor(Boolean(form.referral))}
                    rightSectionPointerEvents="none"
                    rightSectionWidth={18}
                    classNames={fieldClassNames}
                  />
                </Stack>
              </div>
            </div>

            <div
              className="mt-12.5 opacity-0 motion-safe:animate-[fade-up_0.7s_ease-out_forwards]"
              style={{ animationDelay: "240ms" }}
            >
              <Text
                className={`${workSans.className} text-center !underline text-[#000]`}
                size="14px"
              >
                By signing up, you accept our Privacy Policy and Conditions of
                Use .
              </Text>
              <div className="flex justify-center">
                <Button
                  radius={0}
                  size="lg"
                  color="black"
                  style={{ width: 246 }}
                  classNames={{
                    root: " mt-8  text-white transition hover:bg-black",
                    label: `${workSans.className} text-[16px] uppercase leading-[24px] font-medium`,
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
