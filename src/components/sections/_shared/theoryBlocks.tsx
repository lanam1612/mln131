import type { TheoryBlock } from '@/data/types'
import { cn } from '@/lib/utils'

// =============================================================================
// Shared content block renderers used by TheoryFoundation (dân tộc)
// and TheologyFoundation (tôn giáo). Both sections render `TheoryBlock[]`
// payloads with the same visual language.
// =============================================================================

export function BlockRender({ block }: { block: TheoryBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
          {block.text}
        </p>
      )
    case 'heading':
      if (block.level === 2) {
        return (
          <h3 className="font-display mt-8 text-2xl leading-tight font-bold tracking-tight text-neutral-900 md:mt-10 md:text-3xl">
            {block.text}
          </h3>
        )
      }
      return (
        <h4 className="font-display mt-6 text-lg font-semibold text-neutral-800 md:text-xl">
          {block.text}
        </h4>
      )
    case 'table':
      return <BlockTable headers={block.headers} rows={block.rows} />
    case 'highlight':
      return <Callout variant={block.variant} text={block.text} />
    case 'list':
      return block.ordered ? (
        <ol className="ml-6 list-decimal space-y-2 text-base leading-relaxed text-neutral-700 marker:font-mono marker:text-brand-red md:text-lg">
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      ) : (
        <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-neutral-700 marker:text-brand-red md:text-lg">
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )
  }
}

export function BlockTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm md:text-base">
        <thead className="bg-neutral-50">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 font-semibold whitespace-nowrap text-neutral-800"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {rows.map((row) => (
            <tr
              key={row.join('|')}
              className="transition-colors hover:bg-neutral-50/70"
            >
              {row.map((cell, ci) => (
                <td
                  key={`${ci}-${cell.slice(0, 24)}`}
                  className={cn(
                    'px-4 py-3 align-top text-neutral-700',
                    ci === 0 &&
                      'font-mono text-xs font-medium text-neutral-500',
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Callout({
  variant,
  text,
}: {
  variant: 'info' | 'warning'
  text: string
}) {
  const isWarning = variant === 'warning'
  return (
    <div
      role="note"
      className={cn(
        'flex gap-3 rounded-lg border-l-4 p-4 md:gap-4 md:p-5',
        isWarning
          ? 'border-amber-500 bg-amber-50 text-amber-900'
          : 'border-brand-navy/60 bg-brand-navy/5 text-brand-navy',
      )}
    >
      <span className="mt-0.5 shrink-0" aria-hidden>
        {isWarning ? <WarningIcon /> : <InfoIcon />}
      </span>
      <p className="text-sm leading-relaxed md:text-base">{text}</p>
    </div>
  )
}

function WarningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 1.5 21.5h21L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="18" r="0.9" fill="currentColor" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="0.9" fill="currentColor" />
      <path
        d="M12 11v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
