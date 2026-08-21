"use client";

import { ChangeEvent, FC, useState } from "react";
import { useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga4";
import { downloadEbook } from "../../utils/ebookApiController";
import { setNotification } from "../../state/features/notificationsSlice";
import {
  ConsentTooltip,
  Fields,
  FormRoot,
  FormTitle,
  InfoIcon,
  InfoIconContainer,
  InputField,
  SubmitButton,
  SuccessMessage
} from "./LeadMagnetForm-styles";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONSENT_COPY =
  "By downloading this ebook, you agree to receive emails from the Qortal community. You can unsubscribe at any time from the mailing list at any time by clicking the unsubscribe link at the bottom of the email.";

export type LeadMagnetFormVariant = "full" | "compact";

interface LeadMagnetFormProps {
  variant?: LeadMagnetFormVariant;
  source?: string;
  title?: string;
  submitLabel?: string;
  onSuccess?: () => void;
}

const validateEmail = (value: string) => EMAIL_REGEX.test(value);

export const LeadMagnetForm: FC<LeadMagnetFormProps> = ({
  variant = "full",
  source = "free-guide",
  title = "Get Your Free Copy",
  submitLabel = "Send me the free guide",
  onSuccess
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const compact = variant === "compact";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (nameError) {
      setNameError(event.target.value.trim() === "");
    }
  };

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (emailTouched) {
      setEmailError(!validateEmail(event.target.value));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(!validateEmail(email));
  };

  const handleSubmit = async () => {
    const isEmailValid = validateEmail(email);
    const isNameValid = name.trim() !== "";
    setEmailError(!isEmailValid);
    setNameError(!isNameValid);

    if (!isEmailValid || !isNameValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await downloadEbook(name, email, "free-guide");
      if (res) {
        setSubmitted(true);
        ReactGA.event({
          category: "User",
          action: "Submitted Free Guide Form",
          label: source
        });
        dispatch(
          setNotification({
            msg: "Success! The guide was sent to your email!",
            alertType: "success"
          })
        );
        onSuccess?.();
      } else {
        ReactGA.event({
          category: "User",
          action: "Free Guide Form Error",
          label: source
        });
        dispatch(
          setNotification({
            msg: "Error sending the guide. Please try again!",
            alertType: "error"
          })
        );
      }
    } catch (error: unknown) {
      ReactGA.event({
        category: "User",
        action: "Free Guide Form Error",
        label: source
      });
      dispatch(
        setNotification({
          msg:
            typeof error === "string"
              ? error
              : "Error sending the guide. Please try again!",
          alertType: "error"
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SuccessMessage compact={compact}>
        Thank you! Check your email for the download link.
      </SuccessMessage>
    );
  }

  return (
    <FormRoot compact={compact}>
      <ConsentTooltip
        title={CONSENT_COPY}
        placement="top"
        open={showTooltip}
        onClose={() => setShowTooltip(false)}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        onBlur={() => setShowTooltip(false)}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -5]
                }
              }
            ]
          }
        }}
      >
        <InfoIconContainer
          compact={compact}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(true)}
        >
          <InfoIcon
            color={theme.palette.text.primary}
            width={compact ? "12" : "14"}
            height={compact ? "12" : "14"}
          />
        </InfoIconContainer>
      </ConsentTooltip>
      <FormTitle compact={compact}>{title}</FormTitle>
      <Fields compact={compact}>
        <InputField
          compact={compact}
          name="name"
          aria-label="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameInputChange}
          required
          error={nameError}
          helperText={nameError ? "Please enter your name." : ""}
        />
        <InputField
          compact={compact}
          name="email"
          label="E-Mail address"
          variant="outlined"
          value={email}
          onChange={handleEmailInputChange}
          onBlur={handleEmailBlur}
          required
          error={emailError}
          helperText={emailError ? "Please enter a valid email address." : ""}
        />
      </Fields>
      <SubmitButton
        compact={compact}
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </SubmitButton>
    </FormRoot>
  );
};
