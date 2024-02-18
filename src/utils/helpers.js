export function getInitials(fullName) {
    if (!fullName) {
      return '';
    }
    const nameArray = fullName.trim().split(/\s+/);
    const initials = nameArray.map((word) => word.charAt(0).toUpperCase()).join('');
    return initials;
  }
  