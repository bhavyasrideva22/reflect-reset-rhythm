import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LikertOption {
  value: string;
  label: string;
}

interface ChoiceOption {
  value: string;
  label: string;
  description?: string;
}

interface QuestionCardProps {
  question: string;
  type: 'likert' | 'choice';
  options: LikertOption[] | ChoiceOption[];
  onAnswer: (answer: string) => void;
  onNext: () => void;
  questionNumber: number;
  showConfidence?: boolean;
  onConfidenceChange?: (confidence: number) => void;
}

const defaultLikertOptions: LikertOption[] = [
  { value: "5", label: "Strongly Agree" },
  { value: "4", label: "Agree" },
  { value: "3", label: "Neutral" },
  { value: "2", label: "Disagree" },
  { value: "1", label: "Strongly Disagree" },
];

export const QuestionCard = ({ 
  question, 
  type, 
  options, 
  onAnswer, 
  onNext, 
  questionNumber,
  showConfidence = false,
  onConfidenceChange 
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [confidence, setConfidence] = useState<number>(50);

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
    onAnswer(value);
  };

  const handleConfidenceChange = (value: string) => {
    const confValue = parseInt(value);
    setConfidence(confValue);
    onConfidenceChange?.(confValue);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      onNext();
      setSelectedAnswer("");
      setConfidence(50);
    }
  };

  const displayOptions = type === 'likert' && options.length === 0 ? defaultLikertOptions : options;

  return (
    <Card className="max-w-3xl mx-auto p-8 shadow-gentle border-border/50">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {questionNumber}
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 to-accent/50 flex-1"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground leading-relaxed mb-6">
          {question}
        </h3>
      </div>

      <div className="space-y-6">
        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
          <div className={`grid gap-3 ${type === 'likert' ? 'grid-cols-1 sm:grid-cols-5' : 'grid-cols-1'}`}>
            {displayOptions.map((option, index) => (
              <div key={option.value} className="relative">
                <RadioGroupItem
                  value={option.value}
                  id={`option-${option.value}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`option-${option.value}`}
                  className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                    hover:border-primary/50 hover:bg-primary/5
                    peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary
                    ${type === 'likert' 
                      ? 'text-center min-h-[80px] text-sm' 
                      : 'text-left min-h-[60px] text-base'
                    }
                  `}
                >
                   <div className="space-y-1">
                     <div className="font-medium">{option.label}</div>
                     {(option as ChoiceOption).description && (
                       <div className="text-sm text-muted-foreground">{(option as ChoiceOption).description}</div>
                     )}
                   </div>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        {showConfidence && selectedAnswer && (
          <div className="mt-8 p-6 bg-muted/30 rounded-lg border">
            <Label className="text-sm font-medium text-foreground mb-3 block">
              How confident are you in this response? ({confidence}%)
            </Label>
            <input
              type="range"
              min="0"
              max="100"
              value={confidence}
              onChange={(e) => handleConfidenceChange(e.target.value)}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Not confident</span>
              <span>Very confident</span>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-full font-medium transition-all duration-300"
          >
            Continue
          </Button>
        </div>
      </div>
    </Card>
  );
};