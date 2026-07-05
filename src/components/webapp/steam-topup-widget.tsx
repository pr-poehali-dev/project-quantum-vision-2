import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const MIN_AMOUNT = 50
const DISCOUNT_PERCENT = 5
const CARD_FEE_PERCENT = 2

type PaymentMethod = "sbp" | "card" | "crypto"

interface Props {
  autoExpanded?: boolean
}

export function SteamTopupWidget({ autoExpanded = false }: Props) {
  const [expanded, setExpanded] = useState(autoExpanded)
  const [promoVisible, setPromoVisible] = useState(false)

  const [login, setLogin] = useState("")
  const [amount, setAmount] = useState("")
  const [promoCode, setPromoCode] = useState("")

  const [loginError, setLoginError] = useState(false)
  const [amountError, setAmountError] = useState<string | null>(null)
  const [promoStatus, setPromoStatus] = useState<"idle" | "valid" | "invalid">("idle")
  const [paymentError, setPaymentError] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null)
  const [waitingPayment, setWaitingPayment] = useState(false)

  const loginRef = useRef<HTMLInputElement>(null)

  const numericAmount = parseFloat(amount) || 0
  const promoDiscount = promoStatus === "valid" ? 5 : 0
  const totalDiscountPercent = DISCOUNT_PERCENT + promoDiscount
  const cardFee = selectedPayment === "card" ? numericAmount * (CARD_FEE_PERCENT / 100) : 0
  const discountAmount = numericAmount * (totalDiscountPercent / 100)
  const finalPrice = Math.max(0, numericAmount - discountAmount + cardFee)

  const expandWidget = () => {
    if (!expanded) setExpanded(true)
  }

  const handlePromoClick = () => {
    expandWidget()
    setPromoVisible(true)
  }

  const handlePromoCheck = () => {
    if (!promoCode.trim()) return
    const isValid = promoCode.trim().toUpperCase() === "STEAM5"
    setPromoStatus(isValid ? "valid" : "invalid")
  }

  const handlePay = () => {
    let hasError = false

    if (!login.trim()) {
      setLoginError(true)
      hasError = true
      expandWidget()
    } else if (login.trim().length < 3) {
      setLoginError(true)
      hasError = true
    } else {
      setLoginError(false)
    }

    if (numericAmount < MIN_AMOUNT) {
      setAmountError(`Минимальная сумма — ${MIN_AMOUNT} ₽`)
      hasError = true
      expandWidget()
    } else {
      setAmountError(null)
    }

    if (expanded && !selectedPayment) {
      setPaymentError(true)
      hasError = true
    }

    if (hasError) return

    setWaitingPayment(true)
  }

  useEffect(() => {
    if (loginError && login.trim().length >= 3) setLoginError(false)
  }, [login, loginError])

  useEffect(() => {
    if (paymentError && selectedPayment) setPaymentError(false)
  }, [selectedPayment, paymentError])

  const paymentTiles: { id: PaymentMethod; label: string; icon: string }[] = [
    { id: "sbp", label: "СБП", icon: "Smartphone" },
    { id: "card", label: "Карта (+2%)", icon: "CreditCard" },
    { id: "crypto", label: "Крипта", icon: "Bitcoin" },
  ]

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        {/* Collapsed row */}
        <div className="p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Gamepad2" size={18} className="text-white" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-white whitespace-nowrap">
              Пополнение Steam
            </h3>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/20">
              -5%
            </Badge>
            <button
              onClick={handlePromoClick}
              className="ml-auto font-geist text-sm text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              Ввести промокод
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto] gap-3">
            <div>
              <div className="relative">
                <Input
                  ref={loginRef}
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="Логин Steam"
                  className={cn(
                    "h-11 bg-black/30 border-white/10 text-white placeholder:text-gray-500 pr-10",
                    loginError && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon name="Info" size={16} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[220px] text-xs">
                    Укажите логин Steam, а не никнейм — посмотреть его можно в настройках профиля
                  </TooltipContent>
                </Tooltip>
              </div>
              {loginError && (
                <p className="text-red-500 text-xs mt-1.5 font-geist">
                  Укажите логин Steam
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value.replace(/[^0-9]/g, ""))
                    expandWidget()
                  }}
                  onFocus={expandWidget}
                  placeholder="Сумма"
                  inputMode="numeric"
                  className={cn(
                    "h-11 bg-black/30 border-white/10 text-white placeholder:text-gray-500 pr-14",
                    amountError && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-geist text-sm select-none">
                  ₽
                </span>
              </div>
              {amountError && (
                <p className="text-red-500 text-xs mt-1.5 font-geist">{amountError}</p>
              )}
            </div>

            <Button
              onClick={handlePay}
              className="h-11 bg-red-500 hover:bg-red-600 text-white font-geist font-semibold px-6 whitespace-nowrap"
            >
              Оплатить {numericAmount > 0 ? Math.round(finalPrice) : ""} ₽
            </Button>
          </div>
        </div>

        {/* Expandable content */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-4 md:px-5 pb-5 border-t border-white/10 pt-4 space-y-4">
              {/* Promo code field */}
              {promoVisible && (
                <div>
                  <div className="flex gap-2">
                    <Input
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value)
                        setPromoStatus("idle")
                      }}
                      placeholder="Промокод"
                      className={cn(
                        "h-10 bg-black/30 border-white/10 text-white placeholder:text-gray-500 max-w-xs",
                        promoStatus === "invalid" && "border-red-500 focus-visible:ring-red-500",
                        promoStatus === "valid" && "border-green-500 focus-visible:ring-green-500"
                      )}
                    />
                    <Button
                      onClick={handlePromoCheck}
                      variant="outline"
                      className="h-10 border-white/10 text-white hover:bg-white/10 hover:text-white"
                    >
                      Применить
                    </Button>
                  </div>
                  {promoStatus === "valid" && (
                    <p className="flex items-center gap-1.5 text-green-500 text-xs mt-2 font-geist">
                      <Icon name="CheckCircle2" size={14} />
                      Промокод применён
                    </p>
                  )}
                  {promoStatus === "invalid" && (
                    <p className="flex items-center gap-1.5 text-red-500 text-xs mt-2 font-geist">
                      <Icon name="XCircle" size={14} />
                      Промокод недействителен
                    </p>
                  )}
                </div>
              )}

              {/* Discount info */}
              {numericAmount > 0 && (
                <div className="flex items-center gap-2 text-sm font-geist text-gray-300">
                  <Icon name="Percent" size={14} className="text-red-400" />
                  Скидка {totalDiscountPercent}% — экономия {Math.round(discountAmount)} ₽
                </div>
              )}

              {/* Payment method */}
              <div>
                <p className="font-geist text-sm text-gray-300 mb-2">Способ оплаты</p>
                <div
                  className={cn(
                    "grid grid-cols-3 gap-2 rounded-lg p-1 transition-all",
                    paymentError && "ring-2 ring-red-500"
                  )}
                >
                  {paymentTiles.map((tile) => (
                    <button
                      key={tile.id}
                      onClick={() => setSelectedPayment(tile.id)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 py-3 rounded-lg border transition-all duration-200 font-geist text-xs",
                        selectedPayment === tile.id
                          ? "border-red-500 bg-red-500/10 text-white"
                          : "border-white/10 bg-black/20 text-gray-400 hover:border-white/30"
                      )}
                    >
                      <Icon name={tile.icon} size={18} />
                      {tile.label}
                    </button>
                  ))}
                </div>
                {paymentError && (
                  <p className="text-red-500 text-xs mt-1.5 font-geist">Выберите способ оплаты</p>
                )}
              </div>

              {/* Summary */}
              {numericAmount > 0 && (
                <div className="flex items-center justify-between border-t border-white/10 pt-3 font-geist text-sm">
                  <span className="text-gray-400">К зачислению ~</span>
                  <span className="text-white font-semibold">{numericAmount} ₽ на баланс Steam</span>
                </div>
              )}

              <Button
                onClick={handlePay}
                className="w-full h-11 bg-red-500 hover:bg-red-600 text-white font-geist font-semibold"
              >
                Оплатить {numericAmount > 0 ? Math.round(finalPrice) : ""} ₽
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={waitingPayment} onOpenChange={setWaitingPayment}>
        <DialogContent className="bg-black border-white/10 text-white max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-white font-orbitron text-center">
              Ждём оплату
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
            <p className="text-gray-400 text-sm font-geist">
              Завершите оплату в открывшемся окне. Это займёт не более минуты.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
