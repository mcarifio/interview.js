/**
 * Mike Carifio <mike@carif.io>
 */


function pascal(n) {
  if (n < 0) throw new Error('negative number')
  if (0 == n) return [1];
}

print(pascal(5))